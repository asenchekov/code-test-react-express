import React from 'react';


export default function Table ({ data, setSortBy }) {
  const columns = [
    'in_frame',
    'out_frame',
    'value',
    'labels',
    'location',
  ];

  const thead = (
    <thead>
      <tr>
        {
          columns.map((title) => {
            if (title === 'in_frame' || title === 'out_frame') {
              return <th onClick={() => setSortBy(title)}>{title}</th>
            }

            return <th>{title}</th>
          })
        }
      </tr>
    </thead>
  );

  const tbody = (
    <tbody>
        {data && data.map(({
          in_frame,
          out_frame,
          content,
        }) => (
          <tr>
            <td>{in_frame}</td>
            <td>{out_frame}</td>
            <td>
              {content.value.join(', ')}
            </td>
            <td>
              {content.labels.join(', ')}
            </td>
            <td>
              {content.location.join(', ')}
            </td>
          </tr>
        ))}
      </tbody>
  );

  return (
    <table>
      <caption>Graphics Markup Data</caption>
      {thead}
      {data && tbody}
    </table>
  );
}
