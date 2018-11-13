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
    $artistsobject = DB::table('artists')->get();
    foreach ($artistsobject as $key => $artist)
    {
        $artists[$key] = [
            'id' => $artist->id,
            'first_name' => $artist->first_name,
            'last_name' => $artist->last_name,
            'picture' => $artist->picture,
            'bio' => $artist->bio,
            'facebook' => $artist->facebook,
            'twitter' => $artist->twitter,
            'soundcloud' => $artist->soundcloud
        ] ;
    }
    shuffle($artists);
    $eventsobject = DB::table('events')->get();
    foreach ($eventsobject as $key => $event)
    {
        $events[$key] = [
            'id' => $event->id,
            'day' => $event->day,
            'month' => $event->month,
            'year' => $event->year,
            'city' => $event->city,
            'state' => $event->state,
            'name' => $event->name,
            'venue' => $event->venue
        ] ;
    }
    array_reverse($events);

    return view('pages.home' ,compact('artists', 'events'));
});

Route::get('/home', function () {
    return view('home');
});

Route::get('/catalog', function () {
    return view('catalog');
});

Route::get('/artists', function () {
    $artistsobject = DB::table('artists')->get();
    foreach ($artistsobject as $key => $artist)
    {
        $artists[$key] = [
            'id' => $artist->id,
            'first_name' => $artist->first_name,
            'last_name' => $artist->last_name,
            'picture' => $artist->picture,
            'bio' => $artist->bio,
            'facebook' => $artist->facebook,
            'twitter' => $artist->twitter,
            'soundcloud' => $artist->soundcloud
        ] ;
    }
    shuffle($artists);
    $data = [
      'bodyclass' => 'gallery-photogallery'
    ];
    return view('pages.artists', compact('data','artists'));
});

Route::get('profile/{id}', function ($id) {
    $artist = DB::table('artists')->where('id', $id)->first();

    return view('pages.profile', compact('artist'));
})->where('id', '[0-9]+');

Route::get('/events', function () {
    return view('events');
});

Route::get('/media', function () {
    return view('media');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/send', 'EmailController@send');
