import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comments from "../../layouts/comments/Comments";
import SkeletonVideo from "../../layouts/skeletones/SkeletonVideos";
import VideoHorizontal from "../../layouts/videoHorizontal/VideoHorizontal";
import VideoMetaData from "../../layouts/videoMetaData/VideoMetaData";
import {
  getRelatedVideos,
  getVideosById,
} from "../../redux/actions/videos.action";
import "./_watchScreen.scss";

const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosById(id));
    dispatch(getRelatedVideos(id));
  }, [dispatch, id]);

  const { videos: relatedVideos, loading: relatedVideosLoading } = useSelector(
    (state) => state.relatedVideo
  );

  const { video, loading } = useSelector((state) => state.selectedVideos);

  // console.log(video?.statistics?.commentCount);
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen_player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h5>Loading...</h5>
        )}

        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </Col>
      <Col lg={4}>
        {!loading ? (
          relatedVideos
            ?.filter((relatedVideo) => relatedVideo.snippet)
            .map((relatedVideo) => (
              <VideoHorizontal
                video={relatedVideo}
                key={relatedVideo.id.videoId}
              />
            ))
        ) : (
          <SkeletonTheme color="#343a40" highlightColor="#3c4147">
            <SkeletonVideo width="100%" height="130px" count={15} />
          </SkeletonTheme>
        )}
      </Col>
    </Row>
  );
};

export default WatchScreen;
