# TempApi.TripApi

All URIs are relative to *http://83.212.100.226:3008/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createtrip**](TripApi.md#createtrip) | **POST** /trip | Creates the data
[**deletetrip**](TripApi.md#deletetrip) | **DELETE** /trip/{tripId} | Delete the element
[**getAlltrip**](TripApi.md#getAlltrip) | **GET** /trip/getAll | Get all the data
[**gettrip**](TripApi.md#gettrip) | **GET** /trip/{tripId} | Get the element
[**updatetrip**](TripApi.md#updatetrip) | **PUT** /trip/{tripId} | Updates the element



## createtrip

> Trip createtrip(trip)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TripApi();
let trip = new TempApi.Trip(); // Trip | data to be created
apiInstance.createtrip(trip, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trip** | [**Trip**](Trip.md)| data to be created | 

### Return type

[**Trip**](Trip.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletetrip

> deletetrip(tripId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TripApi();
let tripId = "tripId_example"; // String | the Id parameter
apiInstance.deletetrip(tripId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tripId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlltrip

> [Trip] getAlltrip()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TripApi();
apiInstance.getAlltrip((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Trip]**](Trip.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gettrip

> Trip gettrip(tripId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TripApi();
let tripId = "tripId_example"; // String | the Id parameter
apiInstance.gettrip(tripId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tripId** | **String**| the Id parameter | 

### Return type

[**Trip**](Trip.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatetrip

> Trip updatetrip(tripId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TripApi();
let tripId = "tripId_example"; // String | the Id parameter
let opts = {
  'trip': new TempApi.Trip() // Trip | data to be updated
};
apiInstance.updatetrip(tripId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tripId** | **String**| the Id parameter | 
 **trip** | [**Trip**](Trip.md)| data to be updated | [optional] 

### Return type

[**Trip**](Trip.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

