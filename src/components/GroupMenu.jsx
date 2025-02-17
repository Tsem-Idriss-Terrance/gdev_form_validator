import { useState } from "react";
import { NavLink } from "react-router-dom";
const GroupMenu = ({
  items = [{}],
  barStyle,
  activeItem,
  itemStyle,
  onEachItemClick = () => {},
  firstActiveIdex,
  withLink = false,
  barClass = "",
  itemClass = "",
  activeClass = "",
  innerLinkClass = "",
  onIconClick = () => {},
  multipleSelection = false,
  selectCount = 0,
  onSelectionChange = () => {}, // Callback for selected items
  deleteSelectedOnIconClick = false,
}) => {
  if (items.length === 0) return null;

  const [active, setActive] = useState(() =>
    firstActiveIdex >= 0 ? firstActiveIdex : -1
  );

  const [selectedItems, setSelectedItems] = useState([]);

  const removeSelectedItems = (item) => {
    const updatedSelection = selectedItems.filter(
      (selected) => selected.id !== item.id
    );
    setSelectedItems(updatedSelection);
    onSelectionChange(updatedSelection);
  };
  const handleItemClick = (item, event) => {
    if (multipleSelection) {
      const isSelected = selectedItems.some(
        (selected) => selected.id === item.id
      );

      if (isSelected) {
        // Deselect the item if already selected
        const updatedSelection = selectedItems.filter(
          (selected) => selected.id !== item.id
        );
        setSelectedItems(updatedSelection);
        onSelectionChange(updatedSelection); // Expose updated selection
      } else if (selectedItems.length < selectCount) {
        // Select the item if within the limit
        const updatedSelection = [...selectedItems, item];
        setSelectedItems(updatedSelection);
        onSelectionChange(updatedSelection); // Expose updated selection
      }
    } else {
      setActive(item.id);
      onEachItemClick(item, event);
    }
  };

  return (
    <div style={barStyle} className={barClass}>
      {items.map((item, index) =>
        withLink ? (
          <NavLink
            to={item.link}
            className={`text-decoration-none ${
              multipleSelection
                ? selectedItems.some((selected) => selected.id === item.id)
                  ? activeClass
                  : itemClass
                : active === item.id
                ? activeClass
                : itemClass
            }`}
            key={index}
          >
            <span
              className={innerLinkClass}
              style={
                multipleSelection
                  ? selectedItems.some((selected) => selected.id === item.id)
                    ? activeItem
                    : itemStyle
                  : active === item.id
                  ? activeItem
                  : itemStyle
              }
              onClick={(event) => {
                handleItemClick(item, event);
              }}
            >
              {item.icon ? item.icon : null}
              {<span>{item.label}</span>}
            </span>
          </NavLink>
        ) : (
          <span
            key={index}
            className={
              multipleSelection
                ? selectedItems.some((selected) => selected.id === item.id)
                  ? activeClass
                  : itemClass
                : active === item.id
                ? activeClass
                : itemClass
            }
            style={
              multipleSelection
                ? selectedItems.some((selected) => selected.id === item.id)
                  ? activeItem
                  : itemStyle
                : active === item.id
                ? activeItem
                : itemStyle
            }
            onClick={(event) => {
              handleItemClick(item, event);
            }}
          >
            {item.icon ? (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onIconClick(item);
                  if (deleteSelectedOnIconClick) {
                    removeSelectedItems(item);
                  }
                }}
              >
                {item.icon}
              </span>
            ) : null}
            {
              <span
                className={`${
                  multipleSelection
                    ? !selectedItems.some((selected) => selected.id === item.id)
                      ? "text-gLight"
                      : ""
                    : active !== item.id
                    ? "text-gLight"
                    : ""
                }`}
              >
                {item.label}
              </span>
            }
          </span>
        )
      )}
    </div>
  );
};

export default GroupMenu;
