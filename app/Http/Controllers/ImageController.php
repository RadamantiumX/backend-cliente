<?php

namespace App\Http\Controllers;
use App\Models\Image;

use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function index ()
    {
        $images = Image::all();

        return $images;
    }

    public function store(Request $request)
    {
        $image = Image::create($request->all());
        return response()->json(['Datos guardados correctamente']);
    }

    public function show(Image $image)
    {
        return response()->json([
           'image' => $image
        ]);
    }
}
