/* eslint-disable react/require-default-props */
import _ from 'lodash';
import React, { ReactNode } from 'react';
import { ChildrenArray } from '../../../types';
import useAdder from '../../hooks/useAdder';

type Props = {
  children: ReactNode[] | ReactNode;
  title?: string;
  primary?: boolean;
}

const ContentGroup: React.FC<Props> = ({ children, title = 'Some data', primary }) => {
  const [amountPrice, setAmountPrice] = useAdder(0);
  const childrenData = React.Children.toArray(children) as ChildrenArray[];

  if (!childrenData.length) {
    return null;
  }

  const interpolatedTitle = _.template(title)({
    count: childrenData.length,
    amountPrice,
  });

  return (
    <section
      className={className}
    >
      <h3>{interpolatedTitle}</h3>
      {
        React.Children.map((children), (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { onSetAmountPrice: setAmountPrice });
          }

          return child;
        })
      }
    </section>
  );
};

export default ContentGroup;
