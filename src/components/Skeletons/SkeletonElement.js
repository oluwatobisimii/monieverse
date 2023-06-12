import React from 'react'

const SkeletonElement = ({ type, width, height, borderRadius }) => {
    const style = {
        width: width,
        height: height,
        borderRadius: borderRadius,
    };

    let skeletonElement = null;

    switch (type) {
        case 'text':
            skeletonElement = <span  className="skeleton-text"></span>;
            break;
        case 'box':
            skeletonElement = <div style={style} className="skeleton-box"></div>;
            break;
        case 'circle':
            skeletonElement = <div style={style} className="skeleton-circle"></div>;
            break;
        default:
            skeletonElement = <div style={style} className="skeleton-box"></div>;
    }

    return skeletonElement;
}

export default SkeletonElement