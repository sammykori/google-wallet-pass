import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    function downloadPass(){
        router.post('/pass-download');
    }
    return (
       <>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-100 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-10 text-gray-900">Download Your Google Pass</div>
                        <div className="p-10">
                            <img src='/enGB_add_to_google_wallet_wallet-button.png' alt='Add to Google Wallet' onClick={()=>downloadPass()} />
                        </div>
                        
                    </div>
                </div>
            </div>
       </>
    );
}
