import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieTheaterItem from './MovieTheaterItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieTheaterItemコンポーネント', () => {
  it('プロップスのテスト_都道府県あり', () => {
    const data = movieData.theater[1].prefectures[0].theater[0];
    const pref = movieData.theater[1].prefectures[0].prefecture.name;
    const wrapper = shallow(
      <MovieTheaterItem data={{ ...data, ...{pref: pref}}} />
    );

    const movieTheaterItemPrefectureNode = wrapper.find('div.MovieTheaterItemPrefecture');
    expect(movieTheaterItemPrefectureNode).toHaveLength(1);
    expect(movieTheaterItemPrefectureNode.at(0).text()).toEqual(pref);
  });
  
  it('プロップスのテスト_都道府県なし', () => {
    const data = movieData.theater[1].prefectures[0].theater[0];
    const wrapper = shallow(
      <MovieTheaterItem data={data} />
    );
    
    const movieTheaterItemPrefectureNode = wrapper.find('div.MovieTheaterItemPrefecture');
    expect(movieTheaterItemPrefectureNode).toHaveLength(0);
  });

  it('プロップスのテスト_共通', () => {
    const data = movieData.theater[1].prefectures[0].theater[0];
    const wrapper = shallow(
      <MovieTheaterItem data={data} />
    );

    const movieTheaterItemTitltNode = wrapper.find('div.MovieTheaterItemTitle');
    expect(movieTheaterItemTitltNode).toHaveLength(1);
    expect(movieTheaterItemTitltNode.at(0).text()).toContain(data.name);
  });
});
