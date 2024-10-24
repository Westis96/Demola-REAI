import { Users } from 'lucide-react';
import { Button } from './ui/button';
import TacticalBoard from './TacticalBoard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const MatchStrategy = () => {

  const strategies = [
    {
      name: 'Attacking',
      description: 'High-pressure, possession-based play',
      keyPoints: [
        'Maintain high defensive line',
        'Press aggressively in opponent\'s half',
        'Quick transitions from defense to attack',
        'Utilize width to stretch opponent\'s defense'
      ]
    },
    {
      name: 'Defensive',
      description: 'Solid backline with counter-attacking',
      keyPoints: [
        'Compact defensive formation',
        'Prioritize defensive stability',
        'Quick counter-attacks when possession is regained',
        'Utilize set pieces for scoring opportunities'
      ]
    },
    {
      name: 'Balanced',
      description: 'Adaptable approach for various situations',
      keyPoints: [
        'Flexible formation adjustments',
        'Balance between attack and defense',
        'Controlled possession with calculated risks',
        'Exploit opponent weaknesses as they appear'
      ]
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Match Strategies</h2>
        <Accordion type="single" collapsible className="w-full">
          {strategies.map((strategy, index) => (
            <AccordionItem key={strategy.name} value={`item-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-col items-start">
                  <p className="font-medium">{strategy.name}</p>
                  <p className="text-sm text-muted-foreground">{strategy.description}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground mb-2">Key Points:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {strategy.keyPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="bg-card p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold  mb-4">Tactical Board</h2>
        <TacticalBoard />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold  mb-4">Set Piece Strategies</h2>
          <div className="space-y-4">
            {[
              { name: 'Corner Kicks', variations: 3 },
              { name: 'Free Kicks', variations: 4 },
              { name: 'Throw-ins', variations: 2 },
              { name: 'Penalties', variations: 1 },
            ].map((setPiece, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-foreground/10 rounded-lg">
                <span className="text-sm font-medium ">{setPiece.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">{setPiece.variations} variations</span>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold  mb-4">Player Roles</h2>
          <div className="space-y-4">
            {[
              { position: 'Striker', role: 'Target Man' },
              { position: 'Midfielder', role: 'Box-to-Box' },
              { position: 'Winger', role: 'Inverted' },
              { position: 'Defender', role: 'Ball-Playing' },
              { position: 'Goalkeeper', role: 'Sweeper-Keeper' },
            ].map((role, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-foreground/10 rounded-lg">
                <div>
                  <p className="text-sm font-medium ">{role.position}</p>
                  <p className="text-xs text-muted-foreground">{role.role}</p>
                </div>
                <Button variant="outline" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Assign
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchStrategy;
