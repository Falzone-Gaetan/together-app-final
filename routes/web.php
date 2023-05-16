<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
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

    
    Route::get('/activity/{id}', function (int $id) {
        return Inertia::render('Activities/Show', [
            'activity' => App\Models\Activity::with('user','category')->findOrFail($id)
        ]);
    })->name('activities.show');

    Route::get('/Profile/Show', function () {
        $user = auth()->user();
        return Inertia::render('Profile/Show');
    })->name('show');

    Route::get('/addActivity', function () {
        return Inertia::render('Activities/Add', [ 
            'activity' => App\Models\Activity::with('user','category'),
            'categories' => App\Models\Category::get()
        ]);
    })->name('add');
    Route::get('/category/{id}', function (int $id) {
        $category = App\Models\Category::find($id);
        return Inertia::render('Activities/Index', [
            'activities' => App\Models\Activity::where('category_id', $id)->get(),
            'category' => $category
        ]);
    })->name('index');
    
    Route::get('/profileUpdate', function () {
        $user = auth()->user();
        return Inertia::render('Profile/Partials/UpdateProfileInformationForm', ['user' => $user]);
    })->name('profile.update');
});
