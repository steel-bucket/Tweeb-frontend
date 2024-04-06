import {React, useState, useEffect} from "react";
import './Posts.css';
import Navb from '../../components/Navbar/Navbar.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Posts() {
    const [allposts, setAllposts] = useState([]);
    const [filteredposts, setFilteredposts] = useState([]);
    const [filters, setFilters] = useState({
        s: '',
        page: 1
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
        const url = `https://tweeb-api.vercel.app/api/posts/backend?${array.join('&')}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAllposts(filters.page == 1 ? data.data : [...allposts, ...data.data]);
                setFilteredposts(data.data.filter(post => {
                    const searchRegex = new RegExp(filters.s.toLowerCase(), 'i');
                    return searchRegex.test(post.text.toLowerCase())
                }));
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [filters]);


    useEffect(() => {
        let posts = allposts.filter((post) => post.text.toLowerCase().includes(filters.s.toLowerCase()));
        setFilteredposts(posts);
    }, [filters]);

    console.log(allposts);

    const load = () => {
        setFilters({
                ...filters,
                page: filters.page + 1
            }
        );
    }

    let button;
    button = (
        <Button variant="primary" className="d-flex justify-content-center mt-4" onClick={load}>Read More</Button>
    );
    return (<div>
        <div style={{width: '100%'}}>
            <Navb posts={allposts} filters={filters} setFilters={setFilters}/></div>

        <Container style={{margin: '0rem', width: '100%', maxWidth: 'none'}}>
            <Row style={{margin: '0rem', width: '100%'}} className="d-inline-flex">
                {allposts.map((post) => {
                    return (<Col xs={12} md={6} lg={3} key={post.id}>
                            <Card style={{width: '100%', margin: '0.5rem'}}>
                                <Card.Body>
                                    <Card.Title>{post.user}</Card.Title>
                                    <Card.Text>
                                        {post.text.length > 40 ? (
                                            <>
                                                {post.text.substring(0, 100)}...
                                            </>
                                        ) : (
                                            post.text
                                        )}
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
                {button}
            </Row>
        </Container>

    </div>);
}

export default Posts;
