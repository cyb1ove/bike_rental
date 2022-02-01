import _ from 'lodash';
import React, { ReactNode } from 'react';
import { ContentArticle, ContentTitle } from './styles';
import { ChildrenArray } from '../../../types';
import useAdder from '../../hooks/useAdder';

type Props = {
  children: ReactNode[] | ReactNode;
  title?: string;
}

const ContentGroup: React.FC<Props> = ({ children, title = 'Some data' }) => {
  const [amountPrice, setAmountPrice] = useAdder(0);
  const childrenData = React.Children.toArray(children) as ChildrenArray[];

  if (!childrenData.length) {
    return null;
  }

  const interpolatedTitle = _.template(title)({
    count: childrenData.length,
    amountPrice: amountPrice.toFixed(2),
  });

  return (
    <ContentArticle>
      <ContentTitle>{interpolatedTitle}</ContentTitle>
      {
        React.Children.map((children), (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { onSetAmountPrice: setAmountPrice });
          }

          return child;
        })
      }
    </ContentArticle>
  );
};

export default ContentGroup;
