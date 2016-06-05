import React from 'react'
import _ from 'lodash'
import scales from '../config/scales.json'

const NUMBER_OF_CHOICES = 3

export default class ScaleNamesToKeySignatures extends React.Component {
  constructor() {
    super()

    const shuffledScales = _.shuffle(scales)

    this.state = {
      scales: shuffledScales,
      currentScale: shuffledScales[_.keys(shuffledScales)[0]],
      currentScaleIndex: 0
    }

    this.makeImage = this.makeImage.bind(this)
  }

  loadNextScale() {
    const nextScaleIndex = this.state.currentScaleIndex + 1
    this.setState({
      currentScaleIndex: nextScaleIndex,
      currentScale: this.state.scales[_.keys(this.state.scales)[nextScaleIndex]]
    })
  }

  makeRandomSetOfKeySignatureImages(scale) {
    const scaleValues = _.reject(_.values(scales), (scaleValue) => {
      return scaleValue.image === scale.image
    })
    const uniqScaleValues = _.uniqBy(scaleValues, 'image')
    const randomSample = _.sampleSize(uniqScaleValues, NUMBER_OF_CHOICES)
    const randomSampleWithOriginal = randomSample.concat([scale])

    return _.shuffle(randomSampleWithOriginal)
  }

  makeImage(scale) {
    const path = 'images/' + scale.image + '.jpg'
    const img = <img
                  src={path}
                  onClick={() => { this.guessScale(scale) }}
                />
    return img
  }

  guessScale(scale) {
    const isCorrect = (scale == this.state.currentScale)
    if(isCorrect) {
      this.loadNextScale()
    }
  }

  makeCard(scale) {
    const images = this.makeRandomSetOfKeySignatureImages(scale).map(this.makeImage)
    return (
      <div className="card">
        <p>{scale.display_text}</p>
        {images}
      </div>
    )
  }

  render() {
    console.log({scales})
    return (
      <div>
        {this.makeCard(this.state.currentScale)}
      </div>
    )
  }
}
