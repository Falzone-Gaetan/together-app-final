<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;
use App\Models\Category;
use Illuminate\Support\Facades\Http;
use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;
//use Illuminate\Pagination\LengthAwarePaginator;

class ActivityController extends Controller
{


    public function getActivitiesWithDistances(Request $request)
    {
        // Récupérez la position de l'utilisateur
        $userLatitude = $request->input('latitude');
        $userLongitude = $request->input('longitude');
        $userRadius = $request->input('radius') | 100;

        // Je récupére les activités de la base de données, avec les liaisons aux autres tables
        $activities = Activity::with('user', 'category')->get();

        // Je parcoure les activités et j'ajoute un faux champ 'distance' à chaque activity
        foreach ($activities as $activity) {
            $activity->distance = $this->haversineGreatCircleDistance(
                $userLatitude,
                $userLongitude,
                $activity->latitude,
                $activity->longitude
            );
        }
        // Je retourne les activités qui sont dans le rayon de xkm
        return response()->json(
            $activities->values()->where('distance', '<', $userRadius)->all()
        );
    }

    public function haversineGreatCircleDistance(
        $latitudeFrom,
        $longitudeFrom,
        $latitudeTo,
        $longitudeTo,
        $earthRadius = 6371
    ) {
        $latFrom = deg2rad($latitudeFrom);
        $lonFrom = deg2rad($longitudeFrom);
        $latTo = deg2rad($latitudeTo);
        $lonTo = deg2rad($longitudeTo);

        $latDelta = $latTo - $latFrom;
        $lonDelta = $lonTo - $lonFrom;

        $angle = 2 * asin(sqrt(pow(sin($latDelta / 2), 2) +
            cos($latFrom) * cos($latTo) * pow(sin($lonDelta / 2), 2)));
        return $angle * $earthRadius;
    }

    public function store(Request $request)
{
    $validatedData = $request->validate([
        'name' => 'required',
        'description' => 'required',
        'location' => 'required',
        'date' => 'required',
        'category_id' => 'required',
        'image' => 'required|image'
    ]);

    $activity = new Activity();
    $activity->name = $validatedData['name'];
    $activity->description = $validatedData['description'];
    $activity->location = $validatedData['location'];
    $activity->date = date('Y-m-d H:i:s', strtotime($validatedData['date'] . ':00'));
    $activity->category_id = $validatedData['category_id'];

    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $imagePath = $image->storePublicly('img');
        $activity->image = $imagePath;
    }

    // Get the latitude and longitude coordinates using the getCoordinates method
    $coordinates = $this->getCoordinates($validatedData['location']);

    if ($coordinates) {
        $activity->latitude = $coordinates['latitude'];
        $activity->longitude = $coordinates['longitude'];
    } else {
        // Handle the case where the API request failed or coordinates were not found
        // You may choose to set default values or display an error message to the user
    }

    $user = auth()->user();
    $activity->user()->attach($user);
    $activity->save();

    return to_route('dashboard');

}
public function index($id)
{
    $category = Category::findOrFail($id);
    $activities = $category->activities;

    return response()->json($activities);
    
}
private function getCoordinates($location)
{
    $apiKey = 'b68afb69c2607c15cb4f6bf022f17e25'; // Replace with your actual API key
    $response = Http::get("https://api.openweathermap.org/geo/1.0/direct?q=$location&limit=1&appid=$apiKey");

    if ($response->successful() && !empty($response['0'])) {
        $data = $response[0];
        $latitude = $data['lat'];
        $longitude = $data['lon'];

        return compact('latitude', 'longitude');
    }

    return null;
}

}

