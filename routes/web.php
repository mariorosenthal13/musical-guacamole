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

//Clear Cache facade value:
Route::get('/clear-cache', function() {
    $exitCode = Artisan::call('cache:clear');
    return '<h1>Cache facade value cleared</h1>';
});

//Reoptimized class loader:
Route::get('/optimize', function() {
    $exitCode = Artisan::call('optimize');
    return '<h1>Reoptimized class loader</h1>';
});

//Route cache:
Route::get('/route-cache', function() {
    $exitCode = Artisan::call('route:cache');
    return '<h1>Routes cached</h1>';
});

//Clear Route cache:
Route::get('/route-clear', function() {
    $exitCode = Artisan::call('route:clear');
    return '<h1>Route cache cleared</h1>';
});

//Clear View cache:
Route::get('/view-clear', function() {
    $exitCode = Artisan::call('view:clear');
    return '<h1>View cache cleared</h1>';
});

//Clear Config cache:
Route::get('/config-cache', function() {
    $exitCode = Artisan::call('config:cache');
    return '<h1>Clear Config cleared</h1>';
});