import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieTheaterScheduleScreenData } from './MovieTheaterScheduleScreenData';
import MovieTheaterScheduleScreen from './MovieTheaterScheduleScreen';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieTheaterScheduleScreenコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieTheaterScheduleScreenData;
    const wrapper = shallow(
      <MovieTheaterScheduleScreen data={data} />
    );

    const movieScheduleScreenDateNode = wrapper.find('div.MovieScheduleScreenDate');
    expect(movieScheduleScreenDateNode).toHaveLength(1);
    const movieScheduleScreenDate = 
      data.month +
      '月' +
      data.day +
      '日(' +
      data.d +
      ')';
    expect(movieScheduleScreenDateNode.at(0).text()).toEqual(movieScheduleScreenDate);

    const movieScheduleScreenTitleNode = wrapper.find('div.MovieScheduleScreenTitle');
    expect(movieScheduleScreenTitleNode).toHaveLength(1);
    expect(movieScheduleScreenTitleNode.at(0).text()).toEqual(data.title);

    var screenList = [];
    var termList = [];
    data.screen.forEach(function (s) {
      screenList.push(s);
      s.term.forEach(function (t) {
        termList.push(t);
      });
    });
    const movieScheduleScreenNameNodes = wrapper.find('div.MovieScheduleScreenName');
    expect(movieScheduleScreenNameNodes).toHaveLength(screenList.length);
    screenList.forEach(function (s, sIdx) {
      const movieScheduleScreenNameNode = movieScheduleScreenNameNodes.at(sIdx);
      expect(movieScheduleScreenNameNode.text()).toEqual('SCREEN' + s.screen);
    });
    const movieScheduleScreenTermNodes = wrapper.find('div.MovieScheduleScreenTerm');
    expect(movieScheduleScreenTermNodes).toHaveLength(termList.length);
    termList.forEach(function (t, tIdx) {
      const movieScheduleScreenTermNode = movieScheduleScreenTermNodes.at(tIdx);
      expect(movieScheduleScreenTermNode.text()).toContain(String(t.startHour).padStart(2, '0') + ':' + String(t.startMinute).padStart(2, '0'));
      expect(movieScheduleScreenTermNode.text()).toContain(String(t.endHour).padStart(2, '0') + ':' + String(t.endMinute).padStart(2, '0'));
    });
  });
});
