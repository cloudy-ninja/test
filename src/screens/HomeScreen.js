import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
import {Container, Wrapper, Separator} from '../components/common';
import {ViewImage, SelectButton, PopupButton} from '../components/home';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: null,
      selectedMedia: null,
      isModalVisible: false,
    };
  }

  /**
   * Pick image
   *
   */
  pickImage = () => {
    // Image select options
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // Open Image Library:
    ImagePicker.launchImageLibrary(options, response => {
      const imageSource = {uri: response.uri};
      this.setState({
        selectedImage: imageSource,
      });
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
    const {selectedImage, isModalVisible} = this.state;

    return (
      <Container>
        <ViewImage
          source={selectedImage || {uri: 'https://source.unsplash.com/random'}}
        />
        <SelectButton onPress={this.onShowPopup} buttonTitle={'Show popup'} />

        <Modal
          backdropColor={'transparent'}
          isVisible={isModalVisible}
          style={styles.modalStyle}>
          <Wrapper
            size={1}
            primary={'flex-end'}
            secondary={'center'}
            marginBottom={50}>
            <Wrapper
              width={'85%'}
              borderRadius={14}
              backgroundColor={'#ffffff'}
              overflow={'hidden'}>
              <PopupButton
                buttonText={'Import from Camera Roll'}
                onPress={this.onSelectImageFromLocal}
              />
              <Separator />
              <PopupButton buttonText={'Import from Cloudy Library'} />
            </Wrapper>
          </Wrapper>
        </Modal>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
  },
});
