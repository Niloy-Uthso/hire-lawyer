import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Charts = ({displayCards}) => {

    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
      );
      const TriangleBar = (props) => {
        const {
          fill, x, y, width, height,
        } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
    console.log(displayCards)
    return (
        <div className='w-full h-[50vh]'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart  width={600} height={400} data={displayCards}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis dataKey={"fee"}/>
                <Bar dataKey="fee" fill="#8884d8"
     shape={<TriangleBar />} /> 
            </BarChart>
            </ResponsiveContainer>
           
        </div>
    );
};

export default Charts;