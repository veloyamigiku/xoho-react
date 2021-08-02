import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieSummary from './MovieSummary';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieSummaryコンポーネント', () => {

  it('プロップスのテスト', () => {
    const data = movieData;
    const wrapper = shallow(
      <MovieSummary data={data} />
    );

    if (data.thumb && data.thumb.length > 0) {
      const movieSummaryLargeThumbNode = wrapper.find('img.MovieSummaryLargeThumb');
      expect(movieSummaryLargeThumbNode).toHaveLength(1);
      expect(movieSummaryLargeThumbNode.at(0).props().src).toEqual(data.thumb[0].url);
    }

    const movieSummaryTitleNode = wrapper.find('div.MovieSummaryTitle');
    expect(movieSummaryTitleNode).toHaveLength(1);
    expect(movieSummaryTitleNode.at(0).text()).toEqual(data.name);

    const movieSummarySubNode = wrapper.find('div.MovieSummarySub');
    expect(movieSummarySubNode).toHaveLength(1);
    expect(movieSummarySubNode.at(0).text()).toEqual(data.sub);

    const movieSummaryThumbNodes = wrapper.find('img.MovieSummaryThumb');
    expect(movieSummaryThumbNodes).toHaveLength(data.thumb.length);
    if (data.thumb && data.thumb.length > 0) {
      data.thumb.forEach(function (thumb, thumbIdx) {
        const movieSummaryThumbNode = movieSummaryThumbNodes.at(thumbIdx);
        expect(movieSummaryThumbNode.props().src).toEqual(thumb.url);
      });
    }

    const movieSummaryDescNode = wrapper.find('div.MovieSummaryDesc');
    expect(movieSummaryDescNode).toHaveLength(1);
    expect(movieSummaryDescNode.at(0).text()).toEqual(data.description);

    const movieSummaryDirectorNode = wrapper.find('div.MovieSummaryDirector');
    expect(movieSummaryDirectorNode).toHaveLength(1);
    var director = null;
    if (data.director && data.director.length > 0) {
      data.director.forEach(function (d) {
        if (director == null) {
          director = d.name;
        } else {
          director += '、' + d.name;
        }
      });
    }
    expect(movieSummaryDirectorNode.at(0).text()).toEqual(director);

    const movieSummaryPerformerNode = wrapper.find('div.MovieSummaryPerformer');
    expect(movieSummaryPerformerNode).toHaveLength(1);
    var performer = null;
    if (data.performer && data.performer.length > 0) {
      data.performer.forEach(function (p) {
        if (performer == null) {
          performer = p.name;
        } else {
          performer += '、' + p.name;
        }
      });
    }
    expect(movieSummaryPerformerNode.at(0).text()).toContain(performer);

    const movieSummaryRunningTimeNode = wrapper.find('div.MovieSummaryRunningTimeMinute');
    expect(movieSummaryRunningTimeNode).toHaveLength(1);
    const runningTime = '[' + data.name + '　上映時間：' + data.runningTimeMinute + '分 ]';
    expect(movieSummaryRunningTimeNode.at(0).text()).toEqual(runningTime);
    
    const movieSummaryUrlNode = wrapper.find('a.MovieSummaryUrl');
    expect(movieSummaryUrlNode).toHaveLength(1);
    const urlText = data.name + '：公式サイト';
    expect(movieSummaryUrlNode.at(0).text()).toEqual(urlText);
    
  });

});
