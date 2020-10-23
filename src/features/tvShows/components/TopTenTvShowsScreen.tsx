import React from 'react';
import '../style/top-10-style.css';

type TopTenTvShowsScreenProps = {
  data: [],
  title: string,
  onSelect: (data: any) => void
}

export const TopTenTvShowsScreen: React.FC<TopTenTvShowsScreenProps> = (props: React.PropsWithChildren<TopTenTvShowsScreenProps>) => {
  return (
    <div className='topTenContainer'>
      <div className='topTenHeaderHolder'>
        <p className='topTenHeader'>Top 10 {props.title}</p>
      </div>
      <div className='topTenMainHolder'>
        {props.data?.slice(0, 10).map((data: any, index: number) => {
          return (
            <div key={index} className='topTenSingleItemHolder' onClick={() => props.onSelect(data)}>
              <div className='topTenSingleItemInnerHolder'>
                <div className='topTenSingleImageHolder'>
                  <img 
                  className='topTenPosterImg' 
                  src={`http://image.tmdb.org/t/p/w185/${data.poster_path}`} 
                  key={data.id} 
                  alt='cover'
                  />
                </div>
                <p className='topTenTitle'>{data.title || data.name}</p>
                <p className='topTenRating'>{data.vote_average}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}