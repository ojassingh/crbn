import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'

export default function ImpactDonut(props: any) {
    const { color, value, width } = props.impact;
    ChartJS.register(ArcElement, Tooltip)

    const doughnutOptions = {
        cutout: width ? width: 48,
      }
    
      const data = {
        datasets: [
          {
            data: [value, 100-value],
            backgroundColor: [color, 'white'],
          },
        ],
      }

      const plugins = [
        {
          id: 'plugin',
          beforeDraw: function (chart: any) {
            var width = chart.width,
              height = chart.height,
              ctx = chart.ctx
            ctx.restore()
            //var fontSize = (height / 100).toFixed(2)
            ctx.font = "bold 25px sans-serif";
            ctx.textBaseline = 'top'
            ctx.fillStyle = color
            var text = value,
              textX = Math.round((width - ctx.measureText(text).width)/2),
              textY = height /2 - 10
            ctx.fillText(text, textX, textY)
            ctx.save()
          },
        },
      ]
    
    return (
        <>
            <Doughnut
                  data={data}
                  options={doughnutOptions}
                  plugins={plugins}
                />
        </>
    )
}