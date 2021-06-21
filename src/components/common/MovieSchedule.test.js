import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { getDateStr, getScheduleDateList } from '../../utils/coming_soon/schedule';
import { comingSoon } from '../coming_soon/ComingSoonData';
import MovieSchedule from './MovieSchedule';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieScheduleコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = comingSoon;
    const wrapper = shallow(
      <MovieSchedule data={data} />
    );

    const scheduleDateList = getScheduleDateList(data);
    const movieScheduleDateNodes = wrapper.find('div.MovieScheduleDate');
    expect(movieScheduleDateNodes).toHaveLength(scheduleDateList.length);
    scheduleDateList.forEach(function (scheduleDate, scheduleDateIdx) {
      const movieScheduleDateNode = movieScheduleDateNodes.at(scheduleDateIdx);
      const movieScheduleDate = getDateStr(
        scheduleDate.year,
        scheduleDate.month,
        scheduleDate.day);
      expect(movieScheduleDateNode.text()).toEqual(movieScheduleDate);
    });
  });
});
