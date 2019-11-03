(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{445:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"reservation-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reservation-system"}},[e._v("#")]),e._v(" Reservation System")]),e._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),a("p",[e._v("This document provides a brief overview of the YARN ReservationSystem.")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The ReservationSystem of YARN provides the user the ability to reserve resources over (and ahead of) time, to ensure that important production jobs will be run very predictably. The ReservationSystem performs careful admission control and provides guarantees over absolute amounts of resources (instead of % of cluster size). Reservation can be both malleable or have gang semantics, and can have time-varying resource requirements. The ReservationSystem is a component of the YARN ResourceManager.")]),e._v(" "),a("h2",{attrs:{id:"flow-of-a-reservation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flow-of-a-reservation"}},[e._v("#")]),e._v(" Flow of a Reservation")]),e._v(" "),a("img",{attrs:{src:"/images/yarn_reservation_system.png",alt:"YARN Reservation System | width=600px"}}),e._v(" "),a("p",[e._v("With reference to the figure above, a typical reservation proceeds as follows:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Step 0 The user (or an automated tool on its behalf) submits a reservation creation request, and receives a response containing the ReservationId.")])]),e._v(" "),a("li",[a("p",[e._v("Step 1 The user (or an automated tool on its behalf) submits a reservation request specified by the Reservation Definition Language (RDL) and ReservationId retrieved from the previous step. This describes the user need for resources over-time (e.g., a skyline of resources) and temporal constraints (e.g., deadline). This can be done both programmatically through the usual Client-to-RM protocols or via the REST api of the RM. If a reservation is submitted with the same ReservationId, and the RDL is the same, a new reservation will not be created and the request will be successful. If the RDL is different, the reservation will be rejected, and the request will be unsuccessful.")])]),e._v(" "),a("li",[a("p",[e._v("Step 2 The ReservationSystem leverages a ReservationAgent (GREE in the figure) to find a plausible allocation for the reservation in the Plan, a data structure tracking all reservation currently accepted and the available resources in the system.")])]),e._v(" "),a("li",[a("p",[e._v("Step 3 The SharingPolicy provides a way to enforce invariants on the reservation being accepted, potentially rejecting reservations. For example, the CapacityOvertimePolicy allows enforcement of both instantaneous max-capacity a user can request across all of his/her reservations and a limit on the integral of resources over a period of time, e.g., the user can reserve up to 50% of the cluster capacity instantanesouly, but in any 24h period of time he/she cannot exceed 10% average.")])]),e._v(" "),a("li",[a("p",[e._v("Step 4 Upon a successful validation the ReservationSystem returns to the user a ReservationId (think of it as an airline ticket).")])]),e._v(" "),a("li",[a("p",[e._v("Step 5 When the time comes, a new component called the PlanFollower publishes the state of the plan to the scheduler, by dynamically creating/tweaking/destroying queues.")])]),e._v(" "),a("li",[a("p",[e._v("Step 6 The user can then submit one (or more) jobs to the reservable queue, by simply including the ReservationId as part of the ApplicationSubmissionContext.")])]),e._v(" "),a("li",[a("p",[e._v("Step 7 The Scheduler will then provide containers from a special queue created to ensure resources reservation is respected. Within the limits of the reservation, the user has guaranteed access to the resources, above that resource sharing proceed with standard Capacity/Fairness sharing.")])]),e._v(" "),a("li",[a("p",[e._v("Step 8 The system includes mechanisms to adapt to drop in cluster capacity. This consists in replanning by “moving” the reservation if possible, or rejecting the smallest amount of previously accepted reservation (to ensure that other reservation will receive their full amount).")])])]),e._v(" "),a("h2",{attrs:{id:"configuring-the-reservation-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-reservation-system"}},[e._v("#")]),e._v(" Configuring the Reservation System")]),e._v(" "),a("p",[e._v("Configuring the ReservationSystem is simple. Currently we have added support for reservations in both CapacityScheduler and FairScheduler. You can mark any leaf queue in the capacity-scheduler.xml or fair-scheduler.xml as available for “reservations” (see "),a("router-link",{attrs:{to:"/en/docs/hadoop-yarn/hadoop-yarn-site/CapacityScheduler.html#Configuring_ReservationSystem_with_CapacityScheduler"}},[e._v("CapacityScheduler")]),e._v(" and the "),a("router-link",{attrs:{to:"/en/docs/hadoop-yarn/hadoop-yarn-site/FairScheduler.html#Configuring_ReservationSystem"}},[e._v("FairScheduler")]),e._v(" for details). Then the capacity/fair share within that queue can be used for making reservations. Jobs can still be submitted to the reservable queue without a reservation, in which case they will be run in best-effort mode in whatever capacity is left over by the jobs running within active reservations.")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);