import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<Text style={styles.play}>This is my first react-native app!</Text>
			<StatusBar style="auto" />
		</View>
	)
}
//! tutorial 3 next
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	play: {
		color: 'blue'
	}
})
