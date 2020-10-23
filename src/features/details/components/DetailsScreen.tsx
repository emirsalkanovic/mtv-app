import React, { Dispatch, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { LoadingScreen } from '../../../components/LoadingScreen';
import { getVideo } from '../actions/details-actions';
import '../style/details-style.css';

type DetailsScreenProps = {
  selectedData: any,
  closeModal: () => void,
  selectedTab: string
}

export const DetailsScreen: React.FC<DetailsScreenProps> = (props: React.PropsWithChildren<DetailsScreenProps>) => {
  const videos: any = useSelector(
    (state: any) => state.videos,
    shallowEqual
  );
  const isLoading: boolean = useSelector(
    (state: any) => state.videos.isLoading,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const getVideos = React.useCallback(
    (id: any, selectedTab: string) => dispatch(getVideo(id, selectedTab)),
    [dispatch]
  );

  const renderPosterContent = () => {
    let key = videos.results?.results?.length > 0 ? videos.results.results[0].key : null;
    if (!key) {
      return (
        <img
          className='detailsCoverPhoto' src={props.selectedData.poster_path ? `http://image.tmdb.org/t/p/w185/${props.selectedData.poster_path}` : './no-image.png'}
          key={props.selectedData.id}
          alt='cover'
        />
      );
    } else {
      return (
        <div className='detailsVideoContainer'>
          <iframe
            title='trailer'
            className="detailsVideo"
            src={`https://www.youtube.com/embed/${key}`}
            key={props.selectedData.id}>

          </iframe>
        </div>
      );
    }
  }

  useEffect(() => {
    let id = props.selectedData.id;
    let { selectedTab } = props;
    getVideos(id, selectedTab)
  }, [props.selectedData])

  return (
    <div className='detailsPopupContainer'>
      {isLoading ? <LoadingScreen /> :
        <div className='detailsMainHolder'>
          <div className='detailsContentHolder'>
            {renderPosterContent()}
            <p className='detailsItemName' >{props.selectedData.name}</p>
            <p className='detailsItemRating'>{props.selectedData.vote_average}</p>
            <div className='detailsOverviewHolder'>
              <p className='detailsItemOverview'>{props.selectedData.overview}</p>
            </div>
          </div>
          <div className='detailsButtonHolder'>
            <button className='detailsButton' onClick={props.closeModal}>Close</button>
          </div>
        </div>
      }
    </div>
  )
}