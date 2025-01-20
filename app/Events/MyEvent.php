<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MyEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;
    public $company_sid;

    /**
     * Create a new event instance.
     */
    public function __construct($message, $company_sid)
    {
        $this->message = $message;
        $this->company_sid = $company_sid;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    // public function broadcastOn(): array
    // {
    //     return [
    //         new PrivateChannel('channel-name'),
    //     ];
    // }

    public function broadcastOn()
    {
        try {
            \Log::alert('Broadcasting event');
            return new Channel('my-channel.'.$this->company_sid); // 廣播到的頻道名稱
        } catch (\Throwable $e) {
            \Log::alert($e->getMessage());
            throw new \Exception('broadcastOn 失敗 - ' . $e->getMessage());
        }
    }

    public function broadcastAs()
    {
        return 'my-event';
    }
}
