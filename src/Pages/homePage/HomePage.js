import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CategeriesBar from "../../layouts/categeriesBar/CategeriesBar";
import Video from "../../layouts/video/Video";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";

import SkeletonVideo from "../../layouts/skeletones/SkeletonVideos";

import "./_homePage.scss";

const HomePage = () => {
  const dispatch = useDispatch();

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  // console.log("video", videoData);

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const fetchData = () => {
    if (activeCategory == "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  // view code

  return (
    <Container>
      <CategeriesBar />

      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4}>
                <Video video={video} key={video.id} />
              </Col>
            ))
          : [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>

    // <Container>
    //   <CategeriesBar />
    //   <InfiniteScroll
    //     dataLength={videos.length}
    //     next={fetchData}
    //     hasMore={true}
    //     loader={
    //       <div className="spinner-border text-danger d-block mx-auto"></div>
    //     }
    //     className="row"
    //   >
    //     {console.log("loading", loading)}
    //     {loading
    //       ? videos?.map((video) => {
    //           return (
    //             <Col lg={3} md={4}>
    //               <Video video={video} key={video.id} />
    //             </Col>
    //           );
    //         })
    //       : [...Array(20)].map(() => (
    //           <Col lg={3} md={4}>
    //             <SkeletonVideo />
    //           </Col>
    //         ))}
    //   </InfiniteScroll>
    // </Container>
  );
};

export default HomePage;
