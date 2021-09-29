import { useEffect } from "react";
import "./BlogPostListView.scss";
import Table from "../../components/table/Table";
import { useSelector, useDispatch } from "react-redux";
import { listPosts } from "../../actions/post/post.actions";
import DashboardCard from "../../components/dashboardCard/DashboardCard";

const BlogPostsListView = () => {
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.postList);
    const { posts, error } = postList;

    useEffect(() => {
        dispatch(listPosts());
    }, []);
    return (
        <div className="dkBlogPostListView">
            <div className="container">
                {error && (
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>{error}</h2>
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col-12 pt-3">
                        <DashboardCard title="Post List">
                            <Table data={posts} />
                        </DashboardCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostsListView;
