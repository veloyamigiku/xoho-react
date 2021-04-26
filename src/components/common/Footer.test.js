import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import FooterData from './Footer.data';
import Footer from './Footer';
import { shallow } from 'enzyme';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('Footerコンポーネント', () => {
  it('プロップスのテスト', () => {
    const wrapper = shallow(<Footer data={FooterData} />);

    const footerLinkANodes = wrapper.find('a.FooterLinkA');
    expect(footerLinkANodes).toHaveLength(FooterData.link.length);
    footerLinkANodes.forEach(function (footerLinkANode, footerLinkANodeIdx) {
      expect(footerLinkANode.text()).toEqual(FooterData.link[footerLinkANodeIdx].label);
      expect(footerLinkANode.props().href).toEqual(FooterData.link[footerLinkANodeIdx].url);
    });
  });
});
