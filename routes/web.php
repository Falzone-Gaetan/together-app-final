<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/profile/{id}', function (int $id) {
        return Inertia::render('Profile/Show', [
            'user' => App\Models\User::with('activities')->findOrFail($id)
        ]);
    
    })->name('profile.show');
    
    Route::get('/activity/{id}', function (int $id) {
        return Inertia::render('Activities/Show', [
            'activity' => App\Models\Activity::with('user','category')->findOrFail($id)
        ]);
    })->name('activities.show');

    Route::get('/my-profile', function () {
        return Inertia::render('Profile/MyProfile');
    })->name('myprofile');

    Route::get('/addActivity', function () {
        return Inertia::render('Activities/Add', [ 
            'activity' => App\Models\Activity::with('user','category'),
            'categories' => App\Models\Category::get()
        ]);
    })->name('add');
    Route::post('/activities/add', [ActivityController::class, 'store'])->name('activities.store');

    
});
