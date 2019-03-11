import React from 'react';
import { shallow } from 'enzyme';
import { EditTitleBar } from '../EditTitleBar';

jest.mock('d2-ui/lib/text-field/TextField', () => 'textfield');
jest.mock('../../ItemSelect/ItemSelect', () => 'itemselect');

describe('EditTitleBar', () => {
    const props = {
        name: 'Rainbow Dash',
        description: 'The blue one',
        onChangeTitle: Function.prototype,
        onChangeDescription: Function.prototype,
        style: {
            title: { xyz: '890' },
            description: { abc: '123' },
        },
        classes: {
            section: { sectionStyle: 'section' },
            titleDescription: { titleDescStyle: 'titleDesc' },
            title: { titleStyle: 'title' },
            itemSelect: { itemSelStyle: 'itemSel' },
        },
    };

    it('renders correctly when displayName not provided', () => {
        const tree = shallow(<EditTitleBar {...props} />);
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when displayName is provided', () => {
        const tree = shallow(<EditTitleBar displayName="Regnbue Dash" {...props} />);
        expect(tree).toMatchSnapshot();
    });
});
