import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MovieTheaterScheduleDate from './MovieTheaterScheduleDate';
import { movieTheaterScheduleDateData } from './MovieTheaterScheduleDateData';
Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieTheaterScheduleDateコンポーネント', () => {
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
