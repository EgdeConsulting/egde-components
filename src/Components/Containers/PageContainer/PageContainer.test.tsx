import React, { ReactElement }  from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PageContainer } from './PageContainer';
import { createRoot } from "react-dom/client";

const PAGE_CONTAINER_TESTER_TITLE = 'PageContainerTitle';
const PAGE_CONTAINER_TESTER_SUBTITLE = 'PageContainerSubtitle';
const PAGE_CONTAINER_TESTER_CONTENT = 'PageContainerContent';
const PAGE_CONTAINER_TESTER_Title_ALIGNMENT= 'center';
const PAGE_CONTAINER_TESTER_TEXT_COLOR = '#000000';
const PAGE_CONTAINER_TESTER_SUBTITLE_ALIGNMENT = 'center';
const PAGE_CONTAINER_TESTER_SUBTITLE_TEXT_COLOR = '#000000';
const PAGE_CONTAINER_TESTER_CONTANER_PADDING = '1rem';
const PAGE_CONTAINER_TESTER_CONTAINER_MARGIN = '1rem';
const PAGE_CONTAINER_TESTER_CONTENT_PADDING = '1rem';
const PAGE_CONTAINER_TESTER_CONTENT_MARGIN = '1rem';
const PAGE_CONTAINER_TESTER_SUBTITLE_PADDING = '1rem';
const PAGE_CONTAINER_TESTER_TITLE_PADDING = '1rem';
const PAGE_CONTAINER_TESTER_TITLE_MARGIN = '1rem';
const PAGE_CONTAINER_TESTER_BORDER_COLOR = '#000000';
const PAGE_CONTAINER_TESTER_BORDER_WIDTH = '1px';
const PAGE_CONTAINER_TESTER_CONTENT_BORDER_COLOR = '#000000';
const PAGE_CONTAINER_TESTER_CONTENT_BORDER_WIDTH = '1px';
const PAGE_CONTAINER_TESTER_TITLE_BADGE ={badgeColor: '#ffffff', textColor: '#ffffff', label: '#ffffff'}
const PAGE_CONTAINER_TESTER_BACKGROUND_COLOR = '#ffffff';
const PAGE_CONTAINER_TESTER_CONTENT_COLOR = '#ffffff';
const PAGE_CONTAINER_TESTER_TITLE_COLOR = '#ffffff';
const PAGE_CONTAINER_TESTER_HEIGHT = '100px';
const PAGE_CONTAINER_TESTER_WIDTH = '100px';
const PAGE_CONTAINER_TESTER_CONTAINER_MIN_WIDTH = '100px';
const PAGE_CONTAINER_TESTER_CONTAINER_MAX_WIDTH = '100px';
const PAGE_CONTAINER_TESTER_CONTAINER_SIDE_MARGIN = '1rem';
const PAGE_CONTAINER_TESTER_SHOULD_CONTENT_FILL_CONTAINER = true;
const PAGE_CONTAINER_TESTER_CONTAINER_SIZE = '100px';

const PageContainerTester = (): ReactElement =>{
    return (
        <PageContainer
            title={PAGE_CONTAINER_TESTER_TITLE}
            subtitle={PAGE_CONTAINER_TESTER_SUBTITLE}
            titleAlignment = {PAGE_CONTAINER_TESTER_Title_ALIGNMENT}
            titleTextColor = {PAGE_CONTAINER_TESTER_TEXT_COLOR}
            subtitleAlignment= {PAGE_CONTAINER_TESTER_SUBTITLE_ALIGNMENT}
            subtitleTextColor= {PAGE_CONTAINER_TESTER_SUBTITLE_TEXT_COLOR}
            containerPadding= {PAGE_CONTAINER_TESTER_CONTANER_PADDING}
            containerMargin= {PAGE_CONTAINER_TESTER_CONTAINER_MARGIN}
            contentPadding= {PAGE_CONTAINER_TESTER_CONTENT_PADDING}
            contentMargin= {PAGE_CONTAINER_TESTER_CONTENT_MARGIN}
            subtitlePadding= {PAGE_CONTAINER_TESTER_SUBTITLE_PADDING}
            titlePadding= {PAGE_CONTAINER_TESTER_TITLE_PADDING}
            titleMargin= {PAGE_CONTAINER_TESTER_TITLE_MARGIN}
            borderColor= {PAGE_CONTAINER_TESTER_BORDER_COLOR}
            borderWidth= {PAGE_CONTAINER_TESTER_BORDER_WIDTH}
            contentBorderColor= {PAGE_CONTAINER_TESTER_CONTENT_BORDER_COLOR}
            contentBorderWidth= {PAGE_CONTAINER_TESTER_CONTENT_BORDER_WIDTH}
            titleBadge= {PAGE_CONTAINER_TESTER_TITLE_BADGE}
            backgroundColor= {PAGE_CONTAINER_TESTER_BACKGROUND_COLOR}
            contentColor= {PAGE_CONTAINER_TESTER_CONTENT_COLOR}
            titlesColor= {PAGE_CONTAINER_TESTER_TITLE_COLOR}
            height= {PAGE_CONTAINER_TESTER_HEIGHT}
            width= {PAGE_CONTAINER_TESTER_WIDTH}
            containerMinWidth= {PAGE_CONTAINER_TESTER_CONTAINER_MIN_WIDTH}
            containerMaxWidth= {PAGE_CONTAINER_TESTER_CONTAINER_MAX_WIDTH}
            containerSideMargins= {PAGE_CONTAINER_TESTER_CONTAINER_SIDE_MARGIN}
            shouldContentFillContainer= {PAGE_CONTAINER_TESTER_SHOULD_CONTENT_FILL_CONTAINER}
            containerSize= {PAGE_CONTAINER_TESTER_CONTAINER_SIZE}
        >

            <div>{PAGE_CONTAINER_TESTER_CONTENT}</div>
        </PageContainer>
    );
}

describe('PageContainer component test', () => {
    it('matches snapshot', () => {
        const tree = render(<PageContainerTester />);
        expect(tree).toMatchSnapshot();
      });
      it('renders without chrashing', () => {
        const div = document.createElement('div');
const root = createRoot(div);

root.render(<PageContainerTester/>);
    })

    it('should render with title, subtitle and contnet', () => {
        render(<PageContainerTester />);

        expect(screen.getByText(PAGE_CONTAINER_TESTER_TITLE)).toBeVisible();
        expect(screen.getByText(PAGE_CONTAINER_TESTER_SUBTITLE)).toBeVisible();
        expect(screen.getByText(PAGE_CONTAINER_TESTER_CONTENT)).toBeVisible();
    });
});
