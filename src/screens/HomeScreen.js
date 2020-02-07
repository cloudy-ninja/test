import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import {colors, sizes} from '../constants/theme';
import {Container, Wrapper, Separator} from '../components/common';
import {ViewImage, SelectButton, PopupButton} from '../components/home';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: null,
      selectedVideo: null,
      selectedMediaType: 'image',
      isModalVisible: false,
    };
  }

  /**
   * Pick image
   *
   */
  pickImage = () => {
    // Open Image Library:
    ImagePicker.openPicker({
      mediaType: 'any',
    }).then(media => {
      console.log('media===>>>', media);
      const mediaType = media.mime.split('/')[0];
      console.log('mediaType===>>>', mediaType);

      if (mediaType === 'image') {
        this.setState({
          selectedImage: {uri: media.path},
          selectedMediaType: mediaType,
        });
      } else {
        this.setState({
          selectedVideo: {uri: media.path},
          selectedMediaType: mediaType,
        });
      }
    });
  };

  /**
   * Select image
   *
   */
  onSelectImageFromLocal = () => {
    this.disablePopup();
    setTimeout(() => {
      this.pickImage();
    }, 500);
  };

  /**
   * Show popup
   *
   */
  onShowPopup = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  /**
   * Disable popup
   *
   */
  disablePopup = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    const {
      selectedMediaType,
      selectedImage,
      selectedVideo,
      isModalVisible,
    } = this.state;

    return (
      <Container>
        {selectedMediaType === 'image' ? (
          <ViewImage
            source={
              selectedImage || {uri: 'https://source.unsplash.com/random'}
            }
          />
        ) : (
          <Video
            source={
              selectedVideo || {
                uri:
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }
            } // Can be a URL or a local file.
            ref={ref => {
              this.player = ref;
            }} // Store reference
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.videoError} // Callback when video cannot be loaded
            style={styles.backgroundVideo}
          />
        )}
        <SelectButton onPress={this.onShowPopup} buttonTitle={'Show popup'} />

        <Modal
          onBackdropPress={this.disablePopup}
          backdropColor={'transparent'}
          isVisible={isModalVisible}
          style={styles.modalStyle}>
          <Wrapper
            width={'85%'}
            borderRadius={sizes.radius}
            backgroundColor={colors.white}
            overflow={'hidden'}>
            <PopupButton
              buttonText={'Import from Camera Roll'}
              onPress={this.onSelectImageFromLocal}
            />
            <Separator />
            <PopupButton buttonText={'Import from Cloudy Library'} />
          </Wrapper>
        </Modal>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
