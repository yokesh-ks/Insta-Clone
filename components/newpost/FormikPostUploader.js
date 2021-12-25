import React, { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet, Button } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements/dist/divider/Divider";

const PLACEHOLDER_IMG =
  "https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the Character"),
});

export default function FormikPostUploader() {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validateSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <>
          <View style={styles.postContainer}>
            <Image source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}} style={styles.postImage} />
            <View style={{flex: 1, marginLeft: 12}}>
              <TextInput
                style={styles.postCaption}
                placeholder="Write a Caption ... "
                placeholderTextColor="grey"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            style={{ color: "white", fontSize: 18 }}
            placeholder="Enter a Image URL"
            placeholderTextColor="grey"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
            name="imageUrl"
          />
          {errors.imageUrl && (
              <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.imageUrl}
              </Text>
          )}

          <Button onPress={handleSubmit} title="Share" />
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    margin: 20,
    flexDirection: "row",
  },
  postImage: {
    width: 100,
    height: 100,
  },
  postCaption: {
    color: "white",
    fontSize: 20,
  },
});
