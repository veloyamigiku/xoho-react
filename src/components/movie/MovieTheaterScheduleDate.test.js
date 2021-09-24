import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MovieTheaterScheduleDate from './MovieTheaterScheduleDate';
import { movieTheaterScheduleDateData } from './MovieTheaterScheduleDateData';
Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieTheaterScheduleDateコンポーネント', () => {
  
  it('イベントのテスト', () => {
    const data = movieTheaterScheduleDateData;
    const onClickMock = jest.fn();
    const wrapper = shallow(
      <MovieTheaterScheduleDate
        data={data}
        onClick={onClickMock} />
    );

    const movieTheaterScheduleDateNodes1 = wrapper.find("div.MovieTheaterScheduleDateGroup > div > div");
    expect(movieTheaterScheduleDateNodes1).toHaveLength(data.length);
    expect(movieTheaterScheduleDateNodes1.at(0).props().className).toEqual("MovieTheaterScheduleDateActive");

    movieTheaterScheduleDateNodes1.at(data.length - 1).simulate('click');
    expect(onClickMock.mock.calls).toHaveLength(1);
    const movieTheaterScheduleDateNodes2 = wrapper.find("div.MovieTheaterScheduleDateGroup > div > div");
    expect(movieTheaterScheduleDateNodes2).toHaveLength(data.length);
    expect(movieTheaterScheduleDateNodes2.at(data.length - 1).props().className).toEqual("MovieTheaterScheduleDateActive");
  });

  it('プロップスのテスト', () => {
    const data = movieTheaterScheduleDateData;
    const wrapper = shallow(
      <MovieTheaterScheduleDate data={data} />
    );

    const scheduleDateTitleNodes = wrapper.find("div.MovieTheaterScheduleDateTitle");
    expect(scheduleDateTitleNodes).toHaveLength(data.length);
    const scheduleDateOptionNodes = wrapper.find("div.MovieTheaterScheduleDateOption");
    expect(scheduleDateOptionNodes).toHaveLength(data.length);
    data.forEach(function (scheduleDate, scheduleDateIdx) {
      const scheduleDateTitleNode = scheduleDateTitleNodes.at(scheduleDateIdx);
      const dateTitle =
        scheduleDate.month +
        "/" +
        scheduleDate.day +
        "(" +
        scheduleDate.d +
        ")";
      expect(scheduleDateTitleNode.text()).toEqual(dateTitle);
      const scheduleDateOptionNode = scheduleDateOptionNodes.at(scheduleDateIdx);
      expect(scheduleDateOptionNode.text()).toEqual(scheduleDate.option);
    });
  });

});
