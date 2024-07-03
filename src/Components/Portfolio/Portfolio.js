import { Component } from "react";
import "./Portfolio.scss";
import { db } from "../../config/firebase";
import firebase from 'firebase/compat/app';
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { Pagination } from "../Pagination/Pagination";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { withRouter } from "../../config/withRouter";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            projects: [],
            selected: -1,
        };
    }


    componentDidMount() {
        this.getAllTags();
        const tagId = window.location.hash.split('=')[1];
        if (tagId == "-1") {
            this.getAllProject();
            return;
        }
        this.getProjectWithTag(tagId)

    }

    getAllTags = async () => {
        const tagDocs = collection(db, "tags");
        const tags = await getDocs(tagDocs);
        const tagList = await Promise.all(tags.docs.map(doc => {
            const tag = {};
            tag.name = doc.data().name;
            tag.id = doc.id
            return tag;
        }))
        this.setState({ tags: tagList });
    }

    getAllProject = async () => {
        const projectDocs = collection(db, "projects");
        const projects = await getDocs(projectDocs);
        const projectList = await Promise.all(projects.docs.map(async (doc) => {
            const project = doc.data();
            project.profile = await getDownloadURL(ref(getStorage(), `${doc.data().name}.jpg`));
            project.tags = await Promise.all(doc.data().tags.map(async (tag) => await (await getDoc(tag)).data()));
            return project;
        }))
        this.setState({ projects: projectList });
    }
    getProjectWithTag = async (tagId) => {
        const tagRef = firebase.firestore().collection('tags').doc(tagId);
        const projectDocs = query(collection(db, "projects"), where("tags", "array-contains", tagRef));
        const allDocs = await getDocs(projectDocs);
        const projectList = await Promise.all(allDocs.docs.map(async (doc) => {
            const project = doc.data();
            project.profile = await getDownloadURL(ref(getStorage(), `${doc.data().name}.jpg`));
            project.tags = await Promise.all(doc.data().tags.map(async (tag) => await (await getDoc(tag)).data()));
            return project;
        }))
        this.setState({ projects: projectList });
    }
    onTagClick = (tag, index) => {

        this.setState({ selected: index });
        if (index == -1) {
            this.props.navigate(`/portfolio?id=-1`)
            this.getAllProject();
            return
        }
        this.props.navigate(`/portfolio?id=${tag.id}`)
        this.getProjectWithTag(tag.id)
    }

    render() {
        return (
            <section className="portfolio spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="portfolio__filter">
                                <li className={`TechnaSans ${this.state.selected === -1 ? "active" : ""}`} onClick={() => { this.onTagClick({}, -1) }}>All</li>
                                {this.state.tags && this.state.tags.map((tag, index) =>
                                    <li className={`TechnaSans ${this.state.selected === index ? "active" : ""}`} onClick={() => { this.onTagClick(tag, index) }} key={index}>{tag.name}</li>
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio__gallery">
                        {this.state.projects && (
                            <Pagination projectsProps={this.state.projects} />
                        )}

                    </div>
                </div>
            </section>
        );
    }
}
export default withRouter(Portfolio) 