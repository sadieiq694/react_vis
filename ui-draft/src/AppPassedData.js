import React from 'react';
import * as d3 from 'd3'

class AppPassedData extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    componentDidMount() {
        
        const data = this.props.data
        console.log("data", data)
        console.log("edges", this.edges)

        const width = 640,
            height = 480;

        var colorScale = d3.scaleOrdinal() //=d3.scaleOrdinal(d3.schemeSet2)
            .domain([1, 2, 3])
            .range(['red', 'green', 'blue'])      
          
          //Initializing chart
          const chart2 = d3.select('.chart2')
            .attr('width', width)
            .attr('height', height);
          
        var linkForce = d3
            .forceLink()
            .id(function (link) { return link.id })
            .strength(function (link) { return link.strength })

          //Initializing force simulation
          const simulation = d3.forceSimulation()
            .force('link', linkForce)
            .force('charge', d3.forceManyBody())
            .force('center', d3.forceCenter(width / 2, height / 2))
          
          
          //Creating links
          const link = chart2.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(data.links).enter()
            .append('line')
                .attr("stroke-width", 1)
                .attr("stroke", "black");
          
          //Creating nodes
          const node = chart2.append('g')
            .selectAll('circle')
            .data(data.nodes).enter()
            .append('circle')
                .attr("r", 12)
                .attr("fill", d => colorScale(d.level));

        const text = chart2.append("g")
                .attr("class", "texts")
                .selectAll("text")
                .data(data.nodes)
                .enter().append("text")
                  .text(function (node) { return  node.label })
                    .attr("font-size", 15)
                    .attr("dx", 15)
                    .attr("dy", 4)

          //Starting simulation
          simulation.nodes(data.nodes).on('tick', () => {
            node
              .attr('cx', function (node) { return node.x })
              .attr('cy', function (node) { return node.y })
            text
                .attr('x', function (node) { return node.x })
                .attr('y', function (node) { return node.y })
            link
              .attr('x1', function (link) { return link.source.x })
              .attr('y1', function (link) { return link.source.y })
              .attr('x2', function (link) { return link.target.x })
              .attr('y2', function (link) { return link.target.y })
          });
          
          simulation.force('link')
            .links(data.links)
      }

        render() {
            return (
                <div className='container2'>
                    <h1>Graph Practice 2</h1>
                    <div className='chartContainer'>
                    <svg className='chart2'>
                    </svg>
                    </div>
                </div>
            )
        }
    }

export default AppPassedData