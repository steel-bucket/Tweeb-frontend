import { React, useState, useEffect } from "react";
import "./Posts.css";
import Navb from "../../components/Navbar/Navbar.jsx";
import { motion } from 'framer-motion';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Posts() {
    const [allposts, setAllposts] = useState([]);
    const [filteredposts, setFilteredposts] = useState([]);
    const [filters, setFilters] = useState({
        s: "",
        page: 1,
    });

    useEffect(() => {
        const array = [];
        if (filters.s) {
            const encodedSearch = encodeURIComponent(filters.s);
            array.push(`s=${encodedSearch}`);
        }
        if (filters.page) {
            array.push(`page=${filters.page}`);
        }
        const url = `https://tweeb-api.vercel.app/api/posts/backend?${array.join(
            "&"
        )}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setAllposts(filters.page == 1 ? data.data : [...allposts, ...data.data]);
                setFilteredposts(
                    data.data.filter((post) => {
                        const searchRegex = new RegExp(filters.s.toLowerCase(), "i");
                        return searchRegex.test(post.text.toLowerCase());
                    })
                );
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [filters]);

    useEffect(() => {
        let posts = allposts.filter((post) =>
            post.text.toLowerCase().includes(filters.s.toLowerCase())
        );
        setFilteredposts(posts);
    }, [filters]);

    console.log(allposts);

    const load = () => {
        setFilters({
            ...filters,
            page: filters.page + 1,
        });
    };

    let button;
    button = (
        <Button
            variant="primary"
            className="d-flex justify-content-center mt-4"
            onClick={load}
        >
            Read More
        </Button>
    );
    return (
        <div style={{backgroundColor: "#000C1F"}}>
            <div style={{ width: "100%", position: "fixed", top: 0, zIndex: 999, backgroundColor: "#01204E" }}>
                <Navb posts={allposts} filters={filters} setFilters={setFilters} />
            </div>

            <Container
                style={{ margin: "0rem", width: "100%", maxWidth: "none", overflowX: "hidden", paddingTop: "70px" }}
            >
                <Row style={{ margin: "0rem", width: "100%" }} className="d-inline-flex">
                    {allposts.map((post) => {
                        return (
                            <Col xs={12} md={6} lg={3} key={post.id}>
                                <motion.div
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Card
                                        style={{
                                            width: "100%",
                                            margin: "0.5rem",
                                            backgroundColor: "#031735",
                                            color: "#548AD1",
                                            border: "2px solid #00418B",
                                            fontFamily: "Arial",
                                            
                                        }}
                                    >
                                        <Card.Body>
                                            <Card.Title style={{ color: "#FFFFFF", fontFamily: "Arial" }}>{post.user}</Card.Title>
                                            <Card.Text>
                                                {post.text.length > 40 ? (
                                                    <>
                                                        {post.text.substring(0, 100)}...
                                                    </>
                                                ) : (
                                                    post.text
                                                )}
                                            </Card.Text>

                                            <motion.div
                                                whileHover={{ scale: 1.0 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Button variant="primary" style={{ backgroundColor: "#003066", borderColor: "#0263D3", boxShadow: "0px 0px 3px #0263D3" }}>Read More</Button>
                                            </motion.div>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        );
                    })}
                    {button}
                </Row>
            </Container>
        </div>
    );
}

export default Posts;
