<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
//    return view('main');
    return view('pages.home');
});

Route::get('/home', function () {
    return view('home');
});

Route::get('/catalog', function () {
    return view('catalog');
});

Route::get('/artists', function () {
    $data = [
      'bodyclass' => 'gallery-photogallery'
    ];
    return view('pages.artists', compact('data'));
});

Route::get('/artists1', function () {
    return view('artists');
});

Route::get('/events', function () {
    return view('events');
});

Route::get('/media', function () {
    return view('media');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
