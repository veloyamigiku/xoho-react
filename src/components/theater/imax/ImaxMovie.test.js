import Enzyme, {shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { ranking } from '../../top/ranking/RankingData';
import ImaxMovie, { ImaxMovieConst } from './ImaxMovie';
import { imaxTopData } from './ImaxTopData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('ImaxMovieコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = {
      movieTitleImgUrl: imaxTopData.nowShowingImgUrl,
      movieTitleBgImgUrl: imaxTopData.nowShowingBgImgUrl,
      movie: ranking
    };
    const wrapper  = shallow(
      <ImaxMovie data={data} />
    );

    const imaxMovieImgNodes = wrapper.find('img.ImaxMovieImg');
    expect(imaxMovieImgNodes).toHaveLength(ImaxMovieConst.movieItemCount);
    data.movie.slice(0, ImaxMovieConst.movieItemCount).forEach(function (imaxMovie, imaxMovieIdx) {
      const imaxMovieImgNode = imaxMovieImgNodes.at(imaxMovieIdx);
      expect(imaxMovieImgNode.props().src).toEqual(imaxMovie.imgUrl);
    });
  });
});
