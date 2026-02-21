import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const PerformanceSection = () => (
  <section id="performance" className="relative py-20 bg-gradient-to-b from-background via-secondary to-background">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Past <span className="text-primary">Performance</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl">
          GSRS has led large-scale security operations including a $32M transit security contract for the Southern Nevada RTC, managing over 200 personnel, and residential security services for a Nevada HOA covering up to 1,000 homes.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* RTC */}
        <motion.div
          className="group relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative glass glass-hover rounded-3xl p-8 h-full">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl font-black text-foreground">
                RTC
              </div>
              <div>
                <div className="text-sm text-primary uppercase tracking-wider mb-2">Agency</div>
                <h3 className="text-2xl font-bold mb-1">Southern Nevada Regional Transportation Commission</h3>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div><span className="text-muted-foreground">Project:</span><span className="ml-2 font-semibold">Security Guard Services</span></div>
              <div><span className="text-muted-foreground">Dates:</span><span className="ml-2 font-semibold">2017-2021</span></div>
              <div><span className="text-muted-foreground">Value:</span><span className="ml-2 font-semibold">$32 Million</span></div>
              <div>
                <span className="text-muted-foreground">Details:</span>
                <p className="text-muted-foreground mt-1 leading-relaxed">
                  Subcontractor - Manage and Operate all DHS requirements for the contract. Oversee more than 200 armed and unarmed guards, Dispatch, Mobile and Management departments. Provided daily saturation of bus routes and transit operation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* HOA */}
        <motion.div
          className="group relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative glass glass-hover rounded-3xl p-8 h-full">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-muted to-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Users className="w-10 h-10" />
              </div>
              <div>
                <div className="text-sm text-primary uppercase tracking-wider mb-2">Agency</div>
                <h3 className="text-2xl font-bold mb-1">Homeowners Association (HOA) Nevada</h3>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div><span className="text-muted-foreground">Project:</span><span className="ml-2 font-semibold">Security guard services for residential community</span></div>
              <div><span className="text-muted-foreground">Dates:</span><span className="ml-2 font-semibold">2021-2023</span></div>
              <div><span className="text-muted-foreground">Value:</span><span className="ml-2 font-semibold">$300,000</span></div>
              <div>
                <span className="text-muted-foreground">Details:</span>
                <p className="text-muted-foreground mt-1 leading-relaxed">
                  Provide armed and unarmed security guard services for more than 700-1,000 homes and property.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
