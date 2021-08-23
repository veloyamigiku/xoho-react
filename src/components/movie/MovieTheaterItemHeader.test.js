import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieTheaterItemHeader from './MovieTheaterItemHeader';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieTheaterItemHeaderコンポーネント', () => {
  it('プロップスのテスト_都道府県あり', () => {
    const data = movieData.theater[1].prefectures[0].theater[0];
    const pref = movieData.theater[1].prefectures[0].prefecture.name;
    const wrapper = shallow(
      <MovieTheaterItemHeader data={{ ...data, ...{pref: pref}}} />
    );

    const movieTheaterItemHeaderPrefectureNode = wrapper.find('div.MovieTheaterItemHeaderPrefecture');
    expect(movieTheaterItemHeaderPrefectureNode).toHaveLength(1);
    expect(movieTheaterItemHeaderPrefectureNode.at(0).text()).toEqual(pref);
  });
  
  it('プロップスのテスト_都道府県なし', () => {
    const data = movieData.theater[1].prefectures[0].theater[0];
    const wrapper = shallow(
      <MovieTheaterItemHeader data={data} />
    );
    
    const movieTheaterItemHeaderPrefectureNode = wrapper.find('div.MovieTheaterItemHeaderPrefecture');
    expect(movieTheaterItemHeaderPrefectureNode).toHaveLength(0);
  });

  it('プロップスのテスト_共通', () => {
    const data = movieData.theater[1].prefectures[0].theater[0];
    const wrapper = shallow(
      <MovieTheaterItemHeader data={data} />
    );

    const movieTheaterItemHeaderTitltNode = wrapper.find('div.MovieTheaterItemHeaderTitle');
    expect(movieTheaterItemHeaderTitltNode).toHaveLength(1);
    expect(movieTheaterItemHeaderTitltNode.at(0).text()).toContain(data.name);
  });
});
