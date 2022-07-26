import React from 'react';
import { render } from '@testing-library/react';
import { PageContainer } from './PageContainer';



// Snapshot Test
describe('Snapshot PageContainer', () => {
  it('should render correctly', () => {
    const tree = render(<PageContainer 
        title= 'Title'
        titleAlignment= 'center'
        titleTextColor= '#01233D'
        subtitle= 'Subtitle'
        subtitleAlignment= 'center'
        subtitleTextColor= '#01233D'
        children= {<div>Content</div>}
        containerPadding= '0px'
        containerMargin= '0px'
        contentPadding= '0px'
        contentMargin= '0px'
        subtitlePadding= '0px'
        titlePadding= '0px'
        titleMargin= '0px'
        borderColor= '#FAFAFD'
        borderWidth= '1px'
        contentBorderColor= '#FAFAFD'
        contentBorderWidth= '1px'
        titleBadge= {{ 
            badgeColor: '#ffffff',
            textColor: '#ffffff', 
            label: '#ffffff'
        }}
        backgroundColor= '#FAFAFD'
        contentColor= '#FAFAFD'
        titlesColor= '#FAFAFD'
        height= '100%'
        width= '100%'
        containerMinWidth= '0px'
        containerMaxWidth= '100%'
        containerSideMargins= '0px'
        shouldContentFillContainer= {true}
        containerSize= 'auto'
            />);
    expect(tree).toMatchSnapshot();
  });
});
