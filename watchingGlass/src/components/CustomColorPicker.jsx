import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

const CustomColorPicker = ({ onChange }) => {
  const [color, setColor] = useColor("#561ecb");

  const handleColorChange = (newColor) => {
    setColor(newColor);
    if (onChange) {
      onChange(newColor.hex);
    }
  };

  return (
    <div className="flex flex-col justify-center sm:w-[300px] w-[80vw]">
      <ColorPicker 
        width={600}
        height={140}
        color={color}
        onChange={handleColorChange}
        hideHSV
      />
    </div>
  );
};

export default CustomColorPicker;