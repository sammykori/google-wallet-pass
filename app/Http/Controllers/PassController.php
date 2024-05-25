<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lib\EventTicketPass;
use Inertia\Inertia;

class PassController extends Controller
{
    public function downloadPass(){
        $event_ticket = new EventTicketPass();
        $customer_id = 'customer4';
        $class_id = 'TUTORIALPASS1234';

        // $object_res = $event_ticket->createObject('3388000000022347428', $class_id, $customer_id);
   

        $res = $event_ticket->createJwtExistingObjects('3388000000022347428', $class_id, $customer_id);
        // dd($res);
        return Inertia::location($res);
    }
}
