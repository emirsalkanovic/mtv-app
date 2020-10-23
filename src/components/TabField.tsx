import React from 'react';

type TabFieldProps = {
  title?: string,
  selected?: string,
  value?: string
}

export const TabField: React.FC<TabFieldProps> = (props) => {
  return (
    <div className={props.selected === props.value ? 'innerTabActive' : 'innerTab'}>
      <p>{props.title}</p>
    </div>
  );
}