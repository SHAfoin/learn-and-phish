"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import UserEngagementChart from "./UserEngagementChart";
import QuizResultsChart from "./QuizResultsChart";
import QuizResultsByCategory from "./QuizResultsByCategory";
import QuizResultsByDifficulty from "./QuizResultsByDifficulty";
import RecentActivityTable from "./RecentActivityTable";

export default function page() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [timePeriod, setTimePeriod] = useState("Ce mois-ci");

  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4">
      {/* Page Header */}
      <div className="flex justify-between items-start">
        <h1 className="text-[64px] font-bold text-ocean-950 leading-tight">
          Administration
        </h1>
      </div>

      {/* Tabs and Time Period Selector */}
      <div className="flex gap-6 items-start w-full justify-between">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="bg-neutral-50 rounded-[5px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] flex overflow-hidden"
        >
          <TabsList className="bg-transparent border-0 rounded-none flex gap-0">
            <TabsTrigger
              value="dashboard"
              className="data-[state=active]:bg-ocean-600 data-[state=active]:text-white text-ocean-950 border-0 rounded-none px-8 py-2 font-semibold text-sm"
            >
              Tableau de bord
            </TabsTrigger>
            <TabsTrigger
              value="users"
              className="data-[state=active]:bg-ocean-600 data-[state=active]:text-white text-ocean-950 border-0 rounded-none px-8 py-2 font-semibold text-sm"
            >
              Utilisateurs
            </TabsTrigger>
            <TabsTrigger
              value="training"
              className="data-[state=active]:bg-ocean-600 data-[state=active]:text-white text-ocean-950 border-0 rounded-none px-8 py-2 font-semibold text-sm"
            >
              Formation
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Time Period Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-neutral-200 bg-neutral-50 text-ocean-950 hover:bg-neutral-100 gap-2"
            >
              {timePeriod}
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => setTimePeriod("Ce mois-ci")}>
              Ce mois-ci
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimePeriod("Ce trimestre")}>
              Ce trimestre
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimePeriod("Cette année")}>
              Cette année
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimePeriod("Tous les temps")}>
              Tous les temps
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Dashboard Content */}
      {activeTab === "dashboard" && (
        <div className="space-y-6">
          {/* User Engagement Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-ocean-950">
              Engagement des utilisateurs
            </h2>
            <UserEngagementChart />
          </div>

          {/* Two Column Section: Quiz Results and By Category */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Quiz Results */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-ocean-950">
                Résultat des quiz
              </h2>
              <QuizResultsChart />
            </div>

            {/* By Category */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-ocean-950">
                Résultat des quiz par catégorie
              </h2>
              <QuizResultsByCategory />
            </div>
          </div>

          {/* By Difficulty */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-ocean-950">
              Résultat des quiz par difficulté
            </h2>
            <QuizResultsByDifficulty />
          </div>

          {/* Recent Activity */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-ocean-950">
                Dernière activité
              </h2>
              <Link href="/app/admin/recent-activity">
                <Button
                  variant="link"
                  className="text-ocean-850 text-sm font-normal"
                >
                  Voir tous l'activité
                </Button>
              </Link>
            </div>
            <RecentActivityTable />
          </div>
        </div>
      )}

      {/* Users Content */}
      {activeTab === "users" && (
        <div className="space-y-6">
          <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-8">
            <p className="text-neutral-400 text-center">
              Section Utilisateurs - À implémenter
            </p>
          </div>
        </div>
      )}

      {/* Training Content */}
      {activeTab === "training" && (
        <div className="space-y-6">
          <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-8">
            <p className="text-neutral-400 text-center">
              Section Formation - À implémenter
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
