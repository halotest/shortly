require('jest-fetch-mock').enableMocks()
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
global.__reanimatedWorkletInit = () => {}
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'))
global.fetch = require('jest-fetch-mock');
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);