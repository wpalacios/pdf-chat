import React, { useEffect, useState } from 'react';
import IconProps from './Icon.props';

const Icon = ({
  icon,
  width = '100%',
  height = '100%',
  fill = 'currentColor',
  containerStyle,
  ...props
}: IconProps): React.ReactElement => {
  const [iconSvg, setIconSvg] = useState<string | null>(null);

  useEffect(() => {
    const fetchIconSvg = async () => {
      try {
        const iconUrl = require(`./icons/${icon}.svg`);
        const response = await fetch(iconUrl);
        if (response.ok) {
          const svgContent = await response.text();
          setIconSvg(svgContent);
        } else {
          console.error(`Failed to fetch icon: ${icon}`);
        }
      } catch (error) {
        console.error(`Error fetching icon: ${error}`);
      }
    };

    fetchIconSvg();
  }, [icon]);

  if (!iconSvg) return <></>;

  return (
    <div style={{ width, height, ...containerStyle }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          fill
        }}
        {...props}
        dangerouslySetInnerHTML={{ __html: iconSvg }} // render the svg content dynamically
      />
    </div>
  );
};

export default Icon;
